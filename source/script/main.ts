// Editor
import { appEditor } from './editor';


fetch('https://bucas.platform.aphix/')
    .then(response => response.text())
    .then(appEditor)
    .catch(console.error);