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
    
    myStr = String(Object.values(dateObject))
    let newDate = new Date(myStr)
    let dateConversion = new Date(newDate)
    let day = dateConversion.getDate() + 1
    let month = dateConversion.getMonth()
    let year = dateConversion.getFullYear()

    let today = new Date()
    let today2 = new Date()
    today.setMonth(month)
    today.setDate(day)

    if(today.getTime() === today2.getTime()){
        let period = (today.getFullYear() + ' - ' + today.getFullYear() + 1)
        console.log("current period: " + period)
    }

    if(today.getTime() > today2.getTime()){
        let period = ((today.getFullYear())-1 + ' - ' + today.getFullYear())
        console.log("current period: " + period)
    }

}


module.exports = {
    selectEventDesc,
    currentPeriod
};