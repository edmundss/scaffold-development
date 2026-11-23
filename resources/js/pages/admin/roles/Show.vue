<template>
    <Head title="Lomas administrēšana" />
    <div class="row">
        <div class="md:col-4">
            <div class="card">
                <table class="table m-0">
                    <tbody>
                        <tr>
                            <th>Loma</th>
                            <td>{{ role.name }}</td>
                        </tr>
                        <tr>
                            <th>Tiesības</th>
                            <td>
                                <ul class="role-list">
                                    <li v-for="permission in permissions">
                                        <toggle
                                            :model-value="permission.hasPermission"
                                            :name="permission.name"
                                            :label="permission.name"
                                            @update:modelValue="(value) => togglePermission({permission: permission.name, state: value})"
                                        />
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="md:col-8">
            <div class="card">
                <table class="table m-0">
                    <tbody>
                        <tr>
                            <th>Lietotāji ar šo lomu</th>
                        </tr>
                        <tr v-for="user in users">
                            <td>
                                <Link :href="this.UserController.show(user).url">
                                    {{ user.name }}
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import { Head, Link } from '@inertiajs/vue3';
    import Toggle from '@scaffold/components/Toggle.vue';
    import alertify from 'alertifyjs';
    import axios from 'axios';
    import RoleController from '@/actions/App/Http/Controllers/Admin/RoleController.js';
    import UserController from '@/actions/App/Http/Controllers/Admin/UserController.js';

    export default {
        components: {
            Head,
            Toggle,
            Link,
        },
        layout: { pageTitle: 'Lomu administrēšana' },
        props: {
            role: Object,
            permissions: Array,
            users: Array,
        },
        data() {
            return {
                userRoles: [],
                UserController,
                RoleController,
            }
        },
        methods: {
            togglePermission(data) {
                console.log(data);
                axios.post(this.RoleController.togglePermission(this.role).url, data)
                .then(response => {
                    alertify.success(data.state? 'Tiesības "'+data.permission+'" pievienotas' : 'Tiesības "'+data.permission+'" noņemtas');
                }).catch(error => {
                    alertify.error(error.response.data.message);
                });
            },
        },
        mounted() {
            this.userRoles = this.roles;
        },
    }
</script>

<style>
    form {
        width: 100%;
    }

    .role-list {
        list-style: none;
        padding: 0;
    }
</style>
