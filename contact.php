<?php
/**
 * contact.php - STUB for the Visit Vaal Dam enquiry form.
 *
 * Not active yet. The form in contact/index.html posts here, but site.js blocks
 * the submit while the form has data-form-live="false".
 *
 * To switch on (Afrihost cPanel, PHP 8+):
 *  1. Create a mailbox (e.g. hello@yourdomain) in cPanel > Email Accounts.
 *  2. Replace the body below with: validate name/email/message, reject if the
 *     honeypot field "website" is filled, check "consent", then send with
 *     PHPMailer over SMTP (or mail()) to that mailbox, and redirect to a thank-you page.
 *  3. In contact/index.html change data-form-live="false" to "true".
 */
http_response_code(503);
header('Content-Type: text/plain; charset=utf-8');
echo "The enquiry form is not connected yet.";
