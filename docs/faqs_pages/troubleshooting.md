
# TheEye Troubleshooting

[![theeye.io](../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

This page provides troubleshooting to the most common issues about TheEye.

## INSTALL AGENT

### DUPLICATE THEEYE_CLIENT_HOSTNAME

The **Agent** will not install correctly, if the parameter name "THEEYE_CLIENT_HOSTNAME" is equal of any existing **Hostname** on the  **Organization**.

If you have installed the **Agent** on **Docker**, you must remove the image and reinstall it with a different **Hostname**.
