import "./App.css";
import {
  DoneIcon,
  TrashIcon,
  PlusCircleIcon,
  CloudDownloadIcon,
} from "components";

function App() {
  return (
    <div className="container py-4">
      <h1 className="title has-text-centered">Icons</h1>
      <div className="is-flex is-align-items-center has-text-danger mb-4">
        <TrashIcon />
        <TrashIcon size={48} />
        <TrashIcon size={72} />
        <TrashIcon size={96} />
        <TrashIcon size={120} />
        <TrashIcon size={200} />
      </div>
      <div className="is-flex is-align-items-center has-text-success mb-4">
        <DoneIcon />
        <DoneIcon size={48} />
        <DoneIcon size={72} />
        <DoneIcon size={96} />
        <DoneIcon size={120} />
        <DoneIcon size={200} />
      </div>
      <div className="is-flex is-align-items-center has-text-warning mb-4">
        <PlusCircleIcon />
        <PlusCircleIcon size={48} />
        <PlusCircleIcon size={72} />
        <PlusCircleIcon size={96} />
        <PlusCircleIcon size={120} />
        <PlusCircleIcon size={200} />
      </div>
      <div className="is-flex is-align-items-center has-text-link mb-4">
        <CloudDownloadIcon />
        <CloudDownloadIcon size={48} />
        <CloudDownloadIcon size={72} />
        <CloudDownloadIcon size={96} />
        <CloudDownloadIcon size={120} />
        <CloudDownloadIcon size={200} />
      </div>
      <div className="is-flex is-align-items-center has-text-primary mb-4">
        <TrashIcon className="custom-icon-size has-text-danger" />
        <DoneIcon className="custom-icon-size has-text-dark" />
        <PlusCircleIcon className="custom-icon-size has-text-warning" />
        <CloudDownloadIcon className="custom-icon-size" />
      </div>
    </div>
  );
}

export default App;
