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

const currentPeriod = async (empId) => {
    let {data, error} = await supabase
        .from('employees')
        .select('hiredate')
        .eq('employeeId', empId)

    if(error){
        console.error(error)
        return
    }
    let dateObject = new Object()
    dateObject = data[0]
    // console.log(Object.values(dateObject))
    
    myStr = String(Object.values(dateObject))
    console.log(myStr)
    let newDate = new Date(myStr)
    console.log('date: ' + newDate)
}


module.exports = {
    selectEventDesc,
    currentPeriod
};