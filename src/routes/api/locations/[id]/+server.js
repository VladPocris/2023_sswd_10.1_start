import { json, error } from '@sveltejs/kit';

export async function GET({ params, request, locals: { supabase, getSession } }) {
  if (params.id) {
    const id = parseInt(params.id)
    const locations = await supabase
      .from('locations')
      .select('*')
      .eq('id', id)
      .order('name', { ascending: true });

    if (locations.error) {
      return json({
        status: locations.status,
        error: locations.error
      });
    }

    return json({
      data: locations.data[0],
      status: locations.status
    });
  }

  return json({
    status: 400,
    error: 'Bad Request'
  });
}

export async function DELETE({ params, request, locals: { supabase, getSession } }) {

    const TO_DO = false;

    if (!TO_DO) {

        if (params.id) {
            const id = parseInt(params.id);
            const { data, error, status } = await supabase
              .from('locations')
              .delete()
              .eq('id', id);
          
            if (error) {
              return json({
                status,
                error,
              });
            }
          
            return json({
              data,
              status,
            });
          }
    } // end if TO_DO

        return json({
            status: 400,
            error: 'Bad Request - to do'
        });
}