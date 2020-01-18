import React from "react"
import Layout from "../../components/layout"
import Images from "../../components/images"

const Page = () => (
  <Layout>
    <h3>Seminarunterlagen</h3>
    <p>
      Zu Beginn beschränkte sich das Produktangebot auf das Bereitstellen von Seminarunterlagen für
      Projektmanagement-Simulationen. Diese werden über die selbstentwickelte Online Plattform verteilt.
    </p>
    <h3>Simulationsplattform</h3>
    <p>
      Die Plattform begleitend wurde eine Simulations-Engine entwickelt, welche diejenigen Parteien Simuliert, die für
      eine erfolgreiche Projektsimulation notwendig sind (Bank, Kunden, etc.)
    </p>
    <h3>Projektmanagement-Seminare</h3>
    <Images fileName="seminar1" />
    <p>
      Gleichzeitig wurden die Seminare an sich angeboten, welche durch die zahlreichen Projektmanagement Experten vor
      Ort
      abgehalten werden. Kunden für diese Dienstleistung sind überwiegend Firmen, welche Mitarbeiter von zeitnah
      startenden
      bzw. bereits laufenden Projekten weiterbilden wollen. Was zunächst als einziges Produkt am Kunden (neben den
      Unterlagen, die auch ohne Seminarleitererwerbbar sind) startete, ist mittlerweile als Grundlagentraining buchbar.
    </p>
    <h3>Ausbildung von Seminarleitern</h3>
    <p>
      Aus der Not heraus entstanden, nicht schnell genug eigene Seminarleiter ausbilden zu können, hat sich die
      Firmenleitung dazu entschieden, die Ausbildung der Seminarleiter an sich als Produkt online zur Verfügung zu
      stellen. Somit wurde die Ausbildungs-Pipeline auf Effizienz optimiert und es wurde mehr Kunden das erfolgreiche
      Abhalten von Projektmanagement Seminaren und Simulationen ermöglicht.
    </p>
    <h3>Erheben und Auswerten von Daten aus den Simulationen</h3>
    <p>
      Der jüngste Zuwachs zum Produktportfolio stellt das Erheben und Auswerten der Daten, die bei der Simulation
      anfallen, dar. Diese werden auf statistischer Basis ausgewertet und analysiert. Zudem wird geplant, damit einen Machine
      Learning Algorithmus zu füttern, um in Zukunft ein Produkt anbieten zu können, welches Projektmanagement Fehler in
      der Praxis erkennt und für den Projektleiter sichtbar macht und zusätzlich Empfehlungen abgibt.
    </p>
  </Layout>
)

export default Page
