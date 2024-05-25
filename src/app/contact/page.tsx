'use client';

import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    document.title = "Contact | Chris Bailey Piano";

    // Function to load external scripts
    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      document.head.appendChild(script);
    };

    // Load external scripts
    loadScript("https://pym.nprapps.org/pym.v1.min.js");
    loadScript("https://formkeep-production-herokuapp-com.global.ssl.fastly.net/formkeep-embed.js");

    // Add event listeners
    const formkeepEmbed = document.querySelector('#formkeep-embed');

    const handleFormSubmitting = () => {
      console.log('Submitting form...');
    };

    const handleFormSubmitted = () => {
      console.log('Submitted form...');
    };

    if (formkeepEmbed) {
      formkeepEmbed.addEventListener('formkeep-embed:submitting', handleFormSubmitting);
      formkeepEmbed.addEventListener('formkeep-embed:submitted', handleFormSubmitted);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (formkeepEmbed) {
        formkeepEmbed.removeEventListener('formkeep-embed:submitting', handleFormSubmitting);
        formkeepEmbed.removeEventListener('formkeep-embed:submitted', handleFormSubmitted);
      }
    };
  }, []);

  return (
    <>
      <div id="mainContent">
        <p style={{ marginLeft: '12px' }}>Please enter your name, email address, and any comments, and I will get back to you as soon as I can.</p>
      </div>
      <br />
      <div id="formkeep-embed" data-formkeep-url="https://formkeep.com/p/d74a128f1a2491d0086ce981d8ba22ed?embedded=1"></div>
    </>
  );
};
