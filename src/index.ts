import { resolve } from "./did";

let output: HTMLElement;

const setOutput = (text: string) => {
  output.textContent = text;
}

const resolveDID = async (did: string, output: HTMLElement) => {
  setOutput('Fetching DID document...');

  try {
    const result = await resolve(did);
    setOutput(JSON.stringify(result, null, 2));
  }
  catch (e) {
    setOutput(e.toString());
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('mainForm') as HTMLFormElement;
  output = document.getElementById('output');

  form.addEventListener('submit', (evt) => {
    const data = new FormData(form);
    const did = data.get('did').toString();

    resolveDID(did, output);

    evt.preventDefault();
  });
});