import React from "react"
import {

    Link
} from "react-router-dom";

function AGB ()
{
    return(
        <div>
            <h2 style={{textAlign: "left"}}>Allgemeine Geschäftsbedingungen (AGB):</h2>

            <div style={{margin: "20px"}}>
            <h3>§ 1 Geltungsbereich</h3>
            <p>a) Die nachfolgenden Bedingungen gelten für die Nutzer der App "Helpy".</p>
            <p>b) Mit der Verwendung der App erklärt sich der jeweilige Nutzer mit diesen Bedingungen einverstanden.</p>
            <p>c) Diese Bedingungen gelten gegenüber Verbrauchern.</p>

            <h3>§ 2 Datenerhebung</h3>
            <p>a) Lediglich während der Nutzunng der App werden die aktuellen Standort-Daten der einzelnen Nutzer gespeichert. Bei Verlassen der App endet der Zugriff auf den Standort.</p>
            <p>b) Dabei wird nur der aktuellste Standort gespeichert. Verlässt der Nutzer die App, endet die Ortung des Handys und damit die aktuelle Standort-Speicherung. Bei erneutem Aufrufen der App werden neue Standort-Daten erhoben und anschließend über die älteren überschrieben. Dadurch wird ausschließlich auf den augenblicklichen Standort zugegriffen. </p>
            <p>c) Auf ältere bereits überschriebene Daten besteht kein Zugriff.</p >
            <p>d) Darüber hinaus werden personenbezogene Daten, wie die E-Mail und das Passwort des Nutzers, bei der Registrierung aufgenommen und dauerhaft gespeichert. Diese Daten werden anschließend anonymisiert, sodass ein Rückgriff auf die einzelne Person des Nutzers nicht möglich ist.</p>

            <h3>§ 3 Datenspeicherung und /-Nutzung</h3>
            <p>a) Die erhobenen Daten werden ausschließlich zur Ermittlung der Kontaktpersonen der Nutzer verwendet.</p>
            <p>b) Auf diese Weise erhalten die Nutzer eine Benachrichtigung über mögliche infizierte Personen, die mit Ihnen in Kontakt waren.</p>
            <p>c) Die personenbezogenen Daten (E-Mail und Passwort des Nutzers) werden hierbei  zur Authentifizierung der Nutzer gespeichert.</p>
                <Link to="/">Zurück</Link>
            </div>
            
            </div>
    )
}

export default AGB