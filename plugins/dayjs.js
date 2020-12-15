import Vue from 'Vue';
import dayjs from 'dayjs';


export default () => {
    Vue.filter('date', (value, format = 'YYYY-MM-DD hh:mm:ss') => {
        console.log(value);
        return dayjs(value).format('YYYY-MM-DD hh:mm:ss')
    });
}
