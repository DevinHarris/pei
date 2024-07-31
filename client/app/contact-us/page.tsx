// import { Resend } from 'resend';
// import { Email } from '../components/Email';

export default function ContactUsPage() {

    // const resend = new Resend(process.env.RESEND_KEY);

    return (
        <div className="contact-us-page">
                <header className="portfolio-page__header">
                        <div className="portfolio-page__header--content">
                                <h1 className="portfolio-page__header--title">Get in touch</h1>
                                <p className="portfolio-page__header--text">Use the form below to contact us with any questions or just to say hi! We'd love to hear from you.</p>
                        </div>
                    </header>
            <main className="contact-us-page__form">
                <form className="contact__form">
                    <div className="contact__form-section">
                        <label htmlFor="fullname">
                            Your name
                            <input type="text" id="fullname" name="fullname" />
                        </label>
                        <label>
                            Your email
                            <input type="email" id="email" name="email" />
                        </label>
                    </div>
                    <div className="contact__form-section-full">
                        <label htmlFor="subject">
                            Subject
                            <input type="type" id="subject" name="subject" />
                        </label>
                    </div>
                    <div className="contact__form-section-full">
                        <label htmlFor="message">
                            Message
                            <textarea id="message" name="message" rows={10} cols={100}>

                            </textarea>
                        </label>
                    </div>
                    <button type="submit" className="rounded-btn-cta">Send</button>
                </form>
            </main>
        </div>
    )
}