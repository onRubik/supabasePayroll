const infoObject = require('./supabaseUrlKey');
const {createClient} = require('@supabase/supabase-js')

// const supabase = createClient(infoObject.supabaseUrl, infoObject.supabaseAnonKey)

// supabase
//     .from('employees')
//     .select('*')
//     .then(console.log)
//     .catch(console.error)

const main = async () => {
    let {data, error} = await supabase
        .from('employees')
        .select('*')
    
    if (error){
        console.error(error)
        return
    }

    console.log(data)
}

// main()

console.log(infoObject.supabaseUrl)

// export {main};