# supabasePayroll

Payroll schema using supabase (postgresql) + nodeJs


# Hot is works

Using the supabase API reference to make queries ([Link](https://supabase.io/docs/reference/javascript/supabase-client)) a simple normalized relational database is used to store event records like vacations, day offs, etc.


## Requirements

A supabase project must be created ([Link](https://supabase.io/)), then, to store the supabase Url and anon Key, a .js file namded "supabaseUrlKey" with the next data structure:

```javascript
module.exports = {
    supabaseUrl: "",
    supabaseAnonKey: ""
}


