<template>
    <Head title="Lietotāji" />
    <datatable-card

        :url="UserController.datatable().url"
        card-title="Lietotāju saraksts"
        card-icon="person"
        :create-link="UserController.create().url"
        locale="lv"
        :advanced-search="true"
        :columns="[
            {
                data: 'name',
                displayName: 'Vārds',
                name: 'name',
                link: (user) => UserController.show(user.id).url

            },
            {
                data: 'email',
                displayName: 'E-pasts',
                name: 'email',
            },
            {
                data: 'roles',
                displayName: 'Lomas',
                name: 'roles.name',
                sortable: false,
            }
        ]"
    />
</template>

<script>
    import { Head } from '@inertiajs/vue3';
    import DatatableCard from '@sulzanoks/vue-datatable';
    import UserController from '@/actions/App/Http/Controllers/Admin/UserController.js';

    export default {
        components: {
            Head,
            DatatableCard,
        },
        data() {
            return {
                UserController,
            }
        },
    }
</script>
