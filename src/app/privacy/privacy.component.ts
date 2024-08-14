import { Component } from '@angular/core';
import { MenuBarComponent } from '../head/menu-bar/menu-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [MenuBarComponent, FooterComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  content!: string;
  contentGer: string = /*html*/`
    <!-- Datenschutzerklärung -->
    <div class="section" id="datenschutz">
        <h2>Datenschutz</h2>
        <h3>1. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h3>
        <p>Beim Besuch der Website werden die folgenden Informationen automatisch von deinem Browser an den Server unserer Website gesendet:</p>
        <ul>
            <li><strong>Name und E-Mail-Adresse:</strong> Diese Daten werden erfasst, wenn du unser Kontaktformular nutzt, um deine Anfrage zu beantworten.</li>
            <li><strong>Spracheinstellung des Browsers (navigator.language):</strong> Diese Information wird abgefragt, um die korrekte Sprachversion der Website darzustellen.</li>
        </ul>

        <h3>2. Zweck der Verarbeitung</h3>
        <p>Die Verarbeitung der genannten Daten erfolgt, um:</p>
        <ul>
            <li>Dein Anliegen über das Kontaktformular bearbeiten zu können.</li>
            <li>Die Sprachversion der Website korrekt darzustellen.</li>
        </ul>

        <h3>3. Verwendung von Drittanbietern</h3>
        <p>Wir verwenden auf unserer Website keine Drittanbieter, die personenbezogene Daten verarbeiten.</p>

        <h3>4. Speicherdauer</h3>
        <p>Die Daten werden nur so lange gespeichert, wie es für die Bearbeitung deiner Anfrage notwendig ist und anschließend gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

        <h3>5. Rechte der Nutzer</h3>
        <p>Als Nutzer hast du das Recht auf:</p>
        <ul>
            <li><strong>Auskunft:</strong> über die bei uns gespeicherten personenbezogenen Daten.</li>
            <li><strong>Berichtigung:</strong> falscher Daten.</li>
            <li><strong>Löschung:</strong> deiner bei uns gespeicherten Daten, sofern diese nicht zur Erfüllung gesetzlicher Verpflichtungen benötigt werden.</li>
        </ul>
        <p>Du kannst jederzeit Auskunft über deine gespeicherten personenbezogenen Daten verlangen, deren Berichtigung oder Löschung fordern, sowie der Verarbeitung deiner Daten widersprechen. Bitte kontaktiere uns hierfür unter <a href="mailto:roman.schroeder@inclufilm.com">roman.schroeder&#64;inclufilm.com</a>.</p>
    </div>

  `;

  contentEng: string = /*html*/`
    <!-- Imprint -->
    <div class="section" id="imprint">
        <!-- Privacy Policy -->
        <div class="section" id="privacy-policy">
            <h2>Privacy Policy</h2>
            <h3>1. Collection and Storage of Personal Data and the Nature and Purpose of Their Use</h3>
            <p>When visiting the website, the following information is automatically sent by your browser to the server of our website:</p>
            <ul>
                <li><strong>Name and Email Address:</strong> These data are collected when you use our contact form to respond to your inquiry.</li>
                <li><strong>Browser Language Setting (navigator.language):</strong> This information is used to display the correct language version of the website.</li>
            </ul>

            <h3>2. Purpose of Processing</h3>
            <p>The processing of the mentioned data is carried out to:</p>
            <ul>
                <li>Handle your inquiry via the contact form.</li>
                <li>Correctly display the language version of the website.</li>
            </ul>

            <h3>3. Use of Third-Party Providers</h3>
            <p>We do not use any third-party providers on our website that process personal data.</p>

            <h3>4. Retention Period</h3>
            <p>The data is only stored for as long as it is necessary to process your inquiry and is subsequently deleted, provided that there are no legal retention obligations.</p>

            <h3>5. User Rights</h3>
            <p>As a user, you have the right to:</p>
            <ul>
                <li><strong>Access:</strong> information about the personal data stored by us.</li>
                <li><strong>Correction:</strong> of incorrect data.</li>
                <li><strong>Deletion:</strong> of your data stored by us, provided that this data is not required to fulfill legal obligations.</li>
            </ul>
            <p>You can request information about your stored personal data at any time, request its correction or deletion, and object to the processing of your data. Please contact us at <a href="mailto:roman.schroeder@inclufilm.com">roman.schroeder@inclufilm.com</a>.</p>
        </div>

  `;

  ngOnInit(): void {
    this.setLang()
  }


  getLang(): boolean{
    return navigator.language == 'de'
  }
  
  setLang(): void{
    this.content = (this.getLang()) ? this.contentGer : this.contentEng;
  }
}
