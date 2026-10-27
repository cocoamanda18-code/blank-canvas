import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projeto em branco" },
      { name: "description", content: "Uma tela em branco pronta para começar." },
      { property: "og:title", content: "Projeto em branco" },
      { property: "og:description", content: "Uma tela em branco pronta para começar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <main className="min-h-screen bg-background" />;
}
