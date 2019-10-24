import Api from '@/services/api';

export default {
    getRecipes() {
        return Api().get('/cocktails');
    },
};
