import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Java Made Simpler</span>,
  project: {
    link: 'https://github.com/SujalChoudhari/JavaMadeSimpler',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – JMF'
    }
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
  },
  search: {
    placeholder: 'Search',
    error: 'Failed to fetch search results',
    loading: 'Loading...',
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    title: 'On this page',
  },
  editLink: {
    text: "Help us improve this page!"
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <footer>
        <div>
          <p>JavaMadeSimpler 😎</p>
        </div>
      </footer>
    )
  }
}

export default config
