//to store the supabase Url and anon Key, a .js file namded "supabaseUrlKey" with the next data structure
//module.exports = {
//    supabaseUrl: "",
//    supabaseAnonKey: ""
//}


const infoObject = require('./supabaseUrlKey')
const {createClient} = require('@supabase/supabase-js')
var moment = require('moment')

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


const selectEventCurrentPeriod = async (Id, desc) => {
    let gt = new Date()
    let lt = new Date()

    
    let period = await currentPeriod(Id)
    
    async function ifCondition (){
        if(period.today.getTime() === period.today2.getTime()){
            gt = ( String(period.today.getFullYear()) + String(period.today.getMonth()) + String(period.today.getDate()))
            lt = period.today.getFullYear() + 1   
            
            let {data, error} = await supabase
                .from('eventRecords')
                .select('*')
                .eq('employeeId', Id)
                .like('eventDesc', desc)
                .gt('eventDate', gt)
                .lt('eventDate', lt)
        
            if (error){
                console.error(error)
                return
            }

            let daysLenght = Object.keys(data).length
            
            // console.log(daysLenght)
            return daysLenght
        }
    
        if(period.today.getTime() > period.today2.getTime()){
            gt = ( String(period.today.getFullYear()-1)+ '-' + String(period.today.getMonth()) + '-' + String(period.today.getDate()))
            lt = ( String(period.today.getFullYear()) + '-' + String(period.today.getMonth()) + '-' + String(period.today.getDate()))   
            let {data, error} = await supabase
                .from('eventRecords')
                .select('*')
                .eq('employeeId', Id)
                .like('eventDesc', desc)
                .gt('eventDate', gt)
                .lt('eventDate', lt)

            if (error){
                console.error(error)
                return
            }

            let daysLenght = Object.keys(data).length
            
            // console.log(daysLenght)
            return daysLenght
        }

    }

    let returtnResult = await ifCondition()
    return returtnResult
}


const currentPeriod = async (Id) => {
    let {data, error} = await supabase
        .from('employees')
        .select('hiredate')
        .eq('employeeId', Id)

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

    let today = new Date()
    let today2 = new Date()
    today.setMonth(month)
    today.setDate(day)

    if(today.getTime() === today2.getTime()){
        let period = (today.getFullYear() + ' - ' + today.getFullYear() + 1)
        // console.log("current period: " + period)
    }

    if(today.getTime() > today2.getTime()){
        let period = ((today.getFullYear())-1 + ' - ' + today.getFullYear())
        // console.log("current period: " + period)
    }

    return {
        newDate,
        today,
        today2
    }
}


const yearsInService = async (Id) => {
    let hireDate = await currentPeriod(Id)
    console.log('years in service: ' + moment.duration(hireDate.today2 - hireDate.newDate).years())
    let years = moment.duration(hireDate.today2 - hireDate.newDate).years()
    
    return years
}


const vacPerPeriod = async (Id) => {
    let years = await yearsInService(Id)
    let {data, error} = await supabase
        .from('vacationsPolicy')
        .select('daysPerYear')
        .eq('years', years)

    if(error){
        console.error(error)
        return
    }

    let yearsObject = new Object()
    yearsObject = data[0]
    years = (Object.values(yearsObject))
    console.log('vacation days per year in service: ' + years)

    return years
}


const countEventDesc = async (desc, Id) => {
    let {data, error} = await supabase
        .from('eventRecords')
        .select('lastName, eventDate, eventDesc')
        .like('eventDesc', desc)
        .eq('employeeId', Id)
    
    if (error){
        console.error(error)
        return
    }

    let lenght =  Object.keys(data).length

    return lenght
}


const vacAvailable = async (Id, desc) => {
    let lenght = await selectEventCurrentPeriod(Id, desc)
    let available = await vacPerPeriod(Id)

    const result = available - parseInt(lenght)

    console.log('vacations available: ' + result)

}


module.exports = {
    selectEventDesc,
    selectEventCurrentPeriod,
    currentPeriod,
    yearsInService,
    countEventDesc,
    vacAvailable
}