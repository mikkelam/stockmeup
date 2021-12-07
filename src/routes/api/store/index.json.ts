import api from '$lib/_api';


export async function get() {
    const resp = await api.getStore()
    return { body: resp };
}
export async function post({ params }) {

}
