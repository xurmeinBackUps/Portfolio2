import React from 'react'; 
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import '../../../App.css'

const ContactMe = () => (
    <section className="contact-container"> 
        <h2 className="contact_h2">Contact Me</h2>
        <Form action="https://formspree.io/wj.pavocrist@gmail.com" method="POST">
            <FormGroup>
                <Label className="name-input">Name<br />
                    <Input
                        type="text"
                        placeholder="Your Name"
                        id="name"
                        required
                        data-validation-required-message="Who are you?"
                        name="name"
                    />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="contactTitle">Email Address<br />
                    <Input
                        type="email"
                        placeholder="Your Email"
                        id="email"
                        required
                        data-validation-required-message="How am I supposed to get back to you without this?"
                        name="_replyto"
                    />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="contactTitle">Your Message<br />
                    <Input
                        type="textarea"
                        placeholder="Your words"
                        id="message"
                        required
                        data-validation-required-message="Don't fill my inbox with blank messages..."
                        name="message"
                    />
                </Label>
            </FormGroup>
            <Button className="emailMe" type="submit" value="Send">
                Send Message
            </Button>
        </Form>
    </section>  
);

export default ContactMe;