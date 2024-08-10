import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../head/menu-bar/menu-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [MenuBarComponent, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit{

  content!: string;
  contentGer: string = /*html*/`
        <!-- Impressum -->
    <div class="section" id="impressum">
        <h1>Impressum</h1>
        <p><strong>Inclufilm</strong></p>
        <p>Siebengebirgsweg 10<br>53424 Remagen<br>Deutschland</p>
        <p><strong>Vertreten durch:</strong><br>Roman Schröder</p>
        <p><strong>Kontakt:</strong><br>
        E-Mail: <a href="mailto:roman.schroeder@inclufilm.com">roman.schroeder&#64;inclufilm.com</a><br>
        Telefon: 015141684778</p>
        <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br>
        Roman Schröder<br>
        Siebengebirgsweg 10<br>53424 Remagen</p>
    </div>

    <!-- Datenschutzerklärung -->
    <div class="section" id="datenschutz">
        <h2>Datenschutzerklärung</h2>
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

    <!-- AGBs -->
    <div class="section" id="agb">
        <h2>Allgemeine Geschäftsbedingungen (AGB)</h2>
        <p>Da diese Website lediglich Informationen bereitstellt und eine Kontaktmöglichkeit bietet, sind AGBs nicht notwendig.</p>
    </div>

  `;
  contentEng: string = /*html*/`
    <!-- Imprint -->
    <div class="section" id="imprint">
            <h1>Imprint</h1>
            <p><strong>Inclufilm</strong></p>
            <p>Siebengebirgsweg 10<br>53424 Remagen<br>Germany</p>
            <p><strong>Represented by:</strong><br>Roman Schröder</p>
            <p><strong>Contact:</strong><br>
            Email: <a href="mailto:roman.schroeder@inclufilm.com">roman.schroeder@inclufilm.com</a><br>
            Phone: 015141684778</p>
            <p><strong>Responsible for the content according to § 55 Abs. 2 RStV:</strong><br>
            Roman Schröder<br>
            Siebengebirgsweg 10<br>53424 Remagen</p>
        </div>

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

        <!-- Terms & Conditions (T&C) -->
        <div class="section" id="terms-conditions">
            <h2>Terms & Conditions (T&C)</h2>
            <p>Since this website only provides information and offers a contact option, Terms & Conditions are not necessary.</p>
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
