import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
} from '@pdf-viewer/react'

interface Props {
  showToolbar?: boolean
  providerProps?: any
  defaultLayoutProps?: any
}

export const AppPdfViewer = (props: Props) => {
  const { showToolbar = true, providerProps, defaultLayoutProps } = props

  return (
    <RPProvider
      src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
      {...providerProps}
    >
      {showToolbar ? (
        <RPDefaultLayout {...defaultLayoutProps}>
          <RPPages />
        </RPDefaultLayout>
      ) : (
        <div style={{ width: '100%', height: '550px' }}>
          <RPPages />
        </div>
      )}
    </RPProvider>
  )
}


