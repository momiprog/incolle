import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl!, supabaseKey!);

async function check() {
  const { data, error } = await supabase.from('circle').select('*');
  console.log('Result of querying "circle":');
  console.log('Data count:', data?.length);
  console.log('Error:', error);
  
  // Try querying "circles" just in case
  const { data: data2, error: error2 } = await supabase.from('circles').select('*');
  console.log('\nResult of querying "circles" (if exists):');
  console.log('Data count:', data2?.length);
  console.log('Error:', error2);
}

check().catch(console.error);
