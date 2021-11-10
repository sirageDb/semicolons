export default function dateFormatter (utcDate : any) : any{
    const cutString = utcDate.substring(0, utcDate.indexOf('T'));
    const formattedDate = cutString.split("-").reverse().join("/");
    return formattedDate;

}