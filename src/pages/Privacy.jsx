import React from 'react';

export default function Privacy() {
  return (
    <div style={{ padding: '2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Privacy Policy for Transaction Search Extension</h1>
      <p><em>Last updated: [24 April 2025]</em></p>

      <p>
        The <strong>Transaction Search</strong> extension is a lightweight Chrome extension developed to support <strong>Arrayan</strong>,
        a blockchain-based food supply chain solution built on <strong>ResilientDB</strong>. The extension allows users to quickly search
        for transactions and supply chain data hosted on the ResilientDB cloud instance.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        This extension does <strong>not collect, store, or transmit</strong> any personal information, browsing history, or user data.
        The extension performs a simple search operation by interacting with <code>https://cloud.resilientdb.com</code>. It does not persist
        or log any information, nor does it access user credentials, cookies, or private browsing data.
      </p>

      <h2>2. Permissions Used</h2>
      <p>The extension requests the following Chrome permissions:</p>
      <ul>
        <li>
          <code>activeTab</code> – Allows the extension to read the URL of the currently active tab in Chrome. This is used solely
          to interact with the Arrayan application when the user is actively using the platform.
        </li>
        <li>
          <code>host_permissions</code> – Grants access to: <br />
          <code>https://cloud.resilientdb.com/*</code> – Used to query blockchain transaction data from the ResilientDB cloud instance.
        </li>
      </ul>
      <p>
        No other sites are accessed or modified, and no data is transmitted to third-party services.
      </p>

      <h2>3. How We Use Data</h2>
      <p>
        The extension only facilitates blockchain queries to the official ResilientDB endpoint. These queries are based on user-provided
        product or transaction inputs. All interactions are temporary and exist only in the current browser session.
      </p>
      <ul>
        <li>No tracking of user interactions</li>
        <li>No storage of search history</li>
        <li>No collection of personal or identifiable information</li>
        <li>No use of analytics or third-party cookies</li>
      </ul>

      <h2>4. Security</h2>
      <p>
        The extension does not require login or authentication. All data is securely handled within the browser and transmitted
        directly to the ResilientDB endpoint over HTTPS.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        No third-party services are integrated. The extension strictly communicates with:
        <br />
        <code>https://cloud.resilientdb.com</code> – The official cloud instance for querying blockchain data.
      </p>

      <h2>6. Updates</h2>
      <p>
        This policy may be updated as the extension evolves. Any changes will be posted in future versions of this policy and/or
        communicated through the project repository.
      </p>

      <h2>7. Contact</h2>
      <p>
        For questions or concerns regarding this policy or the extension’s behavior, please contact:
        <br />
        📧 <a href="mailto:ttiwari@ucdavis.edu">Tarun Tiwari</a>
      </p>
    </div>
  );
}