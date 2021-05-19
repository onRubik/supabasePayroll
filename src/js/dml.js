const infoObject = require('./supabaseUrlKey');
const {createClient} = require('@supabase/supabase-js')

const supabase = createClient(infoObject.supabaseUrl, infoObject.supabaseAnonKey)

const selectEventDesc = async (eventDesc) => {
    let {data, error} = await supabase
        .from('eventRecords')
        .select('lastName, eventDate, eventDesc')
        .like('eventDesc', eventDesc)
    
    if (error){
        console.error(error)
        return
    }

    console.log(data)
}


module.exports = {selectEventDesc};