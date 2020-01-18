import React from "react"
import Layout from "../components/layout"
import Images from "../components/images"

const GermanPage = () => (
  <Layout>
    <h2>Über uns</h2>
    <p>
      Gegründed 2010 in München von 6 erfahrenen Projektmanagern ist AlphaStrategies ein junges Unternehmen,
      das jedoch insgesamt die Erfahrung von über 180 Jahren in Projektmanagement akkumuliert.
    </p>
    <Images fileName="alphastrategiesHQ" />
    <p>
      Als Anbieter der marktführenden AlphaStrat Projektsimulationsplatform können wir unsere Erfahrungen
      jedem Unternehmen Weltweit anbieten. Von uns geschulte und zertifizierte Seminarleiter sind überall verfügbar,
      um unser Wissen bestmöglich zu vermitteln.
    </p>
    <h2>Kunden</h2>
    <p>
      Unsere Platform wird unter anderem genutzt von:
    </p>
    <ul>
      <li>MoonSoft AG</li>
      <li>Airbnb</li>
      <li>Uber</li>
      <li>MVG</li>
      <li>Lufthansa</li>
      <li>Airbus</li>
      <li>SpaceX</li>
      <li>Deutsche Bahn</li>
      <li>BRD GmbH</li>
    </ul>
  </Layout>
)

export default GermanPage
