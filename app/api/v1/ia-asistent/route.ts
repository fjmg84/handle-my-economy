import getFetchApi from "@/utils/ia-asistent/get-fetch-api";

export async function POST(request: Request) {
  const { message } = await request.json();

  try {
    const response = await getFetchApi(message);

    return new Response(JSON.stringify({ response }), { status: 200 });
  } catch (error) {
    console.error("Error en el endpoint POST de IA Asistente:", error);
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      { status: 500 }
    );
  }
}
