// Editor
import { appEditor } from './editor';


fetch('https://qtp.platform.aphix/')
    .then(response => response.text())
    .then(appEditor)
    .catch(console.error);