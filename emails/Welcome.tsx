import React from 'react';
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Img,
    Button,
    Preview,
} from '@react-email/components';

interface WelcomeEmailProps {
    firstName?: string;
    baseUrl?: string;
    unsubscribeUrl?: string;
    preferencesUrl?: string;
}

export const WelcomeEmail = ({
    firstName = 'Friend',
    baseUrl = 'https://seedinitiative.net',
}: WelcomeEmailProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <Html>
            <Head>
                <title>Welcome to Our Newsletter</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Preview>Welcome to Seed Initiative! ✨</Preview>
            <Body style={styles.body}>
                <Container style={styles.container}>
                    <Section style={styles.header}>
                        <Img
                            src={`${baseUrl}/logo_curve_text.svg`}
                            alt="SEED Initiative Logo"
                            width="240"
                            height="120"
                            style={styles.logo}
                        />
                        <div style={styles.divider} />
                    </Section>

                    <Section style={styles.content}>
                        <Text style={styles.heading}>Welcome to Seed Initiative</Text>
                        <Text style={styles.paragraph}>Hi {firstName},</Text>
                        <Text style={styles.paragraph}>
                            A big welcome and thank you for joining the Seed Initiative community! We&apos;re excited to share our latest updates with you.
                        </Text>

                        <Text style={styles.paragraph}>As a subscriber, you&apos;ll receive:</Text>
                        <ul>
                            <li style={styles.listItem}>Program updates and achievements</li>
                            <li style={styles.listItem}>Student spotlights and success stories</li>
                            <li style={styles.listItem}>Opportunities to get involved and support our mission</li>
                        </ul>

                        <Section style={styles.buttonContainer}>
                            <Button style={styles.button} href={baseUrl}>
                                Visit Our Website
                            </Button>
                        </Section>

                        <Text style={styles.paragraph}>
                            If you have any questions or would like to learn more about our work, please don&apos;t hesitate to reach out at <a href="mailto:sucseedinitiative@gmail.com">sucseedinitiative@gmail.com</a>.
                        </Text>

                        <Text style={styles.paragraph}>
                            Warm regards,<br />
                            The Seed Initiative Team
                        </Text>
                    </Section>

                    <Section style={styles.footer}>
                        <Text style={styles.footerText}>
                            © {currentYear} SEED Initiative. All rights reserved.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default WelcomeEmail;

const styles = {
    body: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        margin: '0',
        padding: '0',
        backgroundColor: '#f8f9fa',
        color: '#0a0a0a',
    },
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#ffffff',
    },
    header: {
        textAlign: 'center' as const,
        padding: '20px 0',
        borderBottom: '1px solid #e6e6e6',
    },
    logo: {
        maxWidth: '180px',
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    content: {
        padding: '30px 20px',
        lineHeight: '1.6',
    },
    footer: {
        backgroundColor: '#f0f7ff',
        padding: '20px',
        textAlign: 'center' as const,
        fontSize: '14px',
        color: '#5c5c5c',
        borderTop: '1px solid #e6e6e6',
    },
    heading: {
        color: '#1a74d2',
        marginTop: '0',
        fontWeight: '600',
        fontSize: '24px',
    },
    paragraph: {
        margin: '16px 0',
        color: '#333333',
    },
    listItem: {
        margin: '8px 0',
        color: '#333333',
    },
    buttonContainer: {
        textAlign: 'center' as const,
        margin: '24px 0',
    },
    button: {
        backgroundColor: '#1a74d2',
        color: '#ffffff',
        padding: '12px 24px',
        fontWeight: '500',
        textDecoration: 'none',
    },
    divider: {
        height: '3px',
        backgroundColor: '#1a74d2',
        width: '60px',
        margin: '20px auto',
    },
    subtitle: {
        color: '#4d5156',
        fontStyle: 'italic',
        textAlign: 'center' as const,
        marginBottom: '30px',
    },
    footerText: {
        margin: '8px 0',
        color: '#5c5c5c',
    },
    socialLinks: {
        marginTop: '20px',
    },
    socialLink: {
        margin: '0 10px',
        textDecoration: 'none',
        color: '#1a74d2',
    },
    footerLink: {
        color: '#5c5c5c',
        textDecoration: 'underline',
    },
}; 