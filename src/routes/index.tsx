import { createFileRoute } from '@tanstack/react-router'
import { RPConfig } from '@react-pdf-kit/viewer'
import { AppPdfViewer } from '../components/AppPdfViewer'
import '../App.css'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="App">
      <RPConfig licenseKey="">
      <div className="container">
        <h1>RP Starter Toolkit: TanStack Router + TypeScript</h1>
        <br />
        <h2>Default Toolbar</h2>
        <AppPdfViewer />
        <h2>Without Toolbar</h2>
        <AppPdfViewer
          showToolbar={false}
          defaultLayoutProps={{
            style: { width: "100%", height: "550px" },
          }}
        />
        <h2>Mobile</h2>
        <AppPdfViewer
          defaultLayoutProps={{
            style: { width: "500px" },
          }}
        />
      </div>
    </RPConfig>
    </div>
  )
}
