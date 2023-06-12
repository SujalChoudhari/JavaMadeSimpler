import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Java Made Simpler</span>,
  project: {
    link: 'https://github.com/SujalChoudhari/JavaMadeSimpler',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Java Made Simpler',
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
  editLink:{
    text:""
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <footer>
        <p>
          Java Made Simpler is a project by <a href="https://github.com/SujalChoudhari">Sujal Choudhari</a>.
        </p>
      </footer>
    )
  }
}

export default config
