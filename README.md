<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1l1k1aK5n4fcc8rp8GLn_VAoz6C7o00-k

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

### Instagram real
Para exibir o feed real do Instagram no grid da galeria, crie um arquivo `.env.local` na raiz com:

```
VITE_INSTAGRAM_ACCESS_TOKEN=<access_token_do_graph_api>
VITE_INSTAGRAM_USER_ID=<instagram_user_id>
```

Os valores vêm do Instagram Basic Display/Graph API. Em ambientes sem essas variáveis, o feed mostrará uma mensagem de erro e um link direto para o perfil.
