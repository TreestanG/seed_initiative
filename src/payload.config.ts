// storage-adapter-import-placeholder
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Header } from './collections/Header-Global'
import { Footer } from './collections/Footer-Global'
import { s3Storage } from '@payloadcms/storage-s3'

const baseUrl = process.env.NODE_ENV === 'production'
  ? process.env.URL!
  : 'http://localhost:3000';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({
        data
      }) => {
        if (data.slug === 'home') {
          return baseUrl
        }
        console.log(baseUrl + '/' + data.slug)
        return `${baseUrl}/${data.slug}`
      },
      collections: ['pages'],
    }
  },
  collections: [Users, Media, Pages],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  plugins: [
    s3Storage({
      collections: {
        media: true
      },
      bucket: process.env.MINIO_BUCKET!,
      config: {
        endpoint: process.env.MINIO_ENDPOINT!,
        credentials: {
          accessKeyId: process.env.MINIO_ACCESS_KEY!,
          secretAccessKey: process.env.MINIO_SECRET_KEY!,
        },
        region: process.env.MINIO_REGION!,
        tls: true,
        forcePathStyle: true,
      }
    })
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    }
  }),
  sharp
})
