import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { generarPromptConEjemplos } from '@/lib/rubrosDatabase';

export async function POST(req: Request) {
  try {
    const { rubro, necesidades } = await req.json();

    if (!rubro) {
      return new Response(
        JSON.stringify({ error: 'Rubro requerido' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const promptTexto = generarPromptConEjemplos(rubro, necesidades);
    console.log('Prompt enviado a Groq:', promptTexto.substring(0, 200) + '...');

    // ✅ Usar Groq (gratis, rápido y confiable)
    const result = streamText({
      model: groq('llama-3.3-70b-versatile'), // Modelo gratuito
      prompt: promptTexto,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();

  } catch (error) {
    console.error('Error en Groq:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Error al procesar la solicitud',
        details: error instanceof Error ? error.message : 'Desconocido'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}