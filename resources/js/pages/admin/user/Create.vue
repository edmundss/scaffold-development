<template>
    <Head title="Pievienot jaunu lietotāju" />
    <authenticated-layout page-title="Pievienot jaunu lietotāju">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <card>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-9">
                                <input v-model="form.username" class="form-control" type="text" placeholder="AD lietotājvārds">
                            </div>
                            <div class="col-lg-3">
                                <button @click="searchAd" class="btn btn-rose btn-block" id="ad-search">Meklēt</button>
                            </div>

                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name">Pilns Vārds</label>
                        <input v-model="form.name" class="form-control" type="text" readonly>
                    </div>
                    <div class="form-group">
                        <label for="title">Amats</label>
                        <input v-model="form.title" class="form-control" type="text" readonly>
                    </div>
                    <div class="form-group">
                        <label for="department">Struktūrvienība</label>
                        <input v-model="form.department" class="form-control" type="text" readonly>
                    </div>
                    <div class="form-group">
                        <label for="email">Epasts</label>
                        <input v-model="form.email" class="form-control" type="text" readonly>
                    </div>
                    <div class="form-group">
                        <label for="avatar">Saite uz attēlu</label>
                        <input v-model="form.avatar" class="form-control" type="text" readonly>
                    </div>
                    <div class="form-group">
                        <label for="horizon_id">Horizon ID</label>
                        <input v-model="form.horizon_id" class="form-control" type="text" readonly>
                    </div>
                    <div class="d-flex justify-content-end">
                        <Link :href="UserController.index().url" class="btn btn-link btn-danger">Atcelt</Link>
                        <button @click="submit" class="btn btn-primary">Pievienot</button>
                    </div>
                </card>
            </div>
        </div>
    </authenticated-layout>
</template>

<script>
    import AuthenticatedLayout from '@scaffold/layouts/AuthenticatedLayout.vue';
    import { Head, useForm } from '@inertiajs/vue3';
    import Card from '@scaffold/components/Card.vue';
    import axios from 'axios';
    import alertify from 'alertifyjs';

    import UserController from '@/actions/App/Http/Controllers/Admin/UserController.js';

    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Card,
        },
        data() {
            return {
                form: useForm({
                    username: '',
                    name: '',
                    title: '',
                    department: '',
                    email: '',
                    avatar: '',
                    horizon_id: '',
                }),
                UserController,
            }
        },
        methods: {
            searchAd(){
                if(this.form.username == ''){
                    const currentUserName = this.$page.props.auth.user.name.split(' ')[0].slice(0, -1);
                    alertify.error('Nu come on! ' + currentUserName + ', kā lai atrodam lietotāju bez lietotājvārda?');
                    return;
                }
                axios.post(UserController.searchAd().url, {
                    username: this.form.username,
                })
                .then((response) => {
                    this.form.horizon_id = response.data[0].horizon_id;
                    this.form.name = response.data[1].name;
                    this.form.title = response.data[1].title;
                    this.form.department = response.data[1].department;
                    this.form.email = response.data[1].email;
                    this.form.avatar = response.data[1].avatar;
                })
                .catch((error) => {
                    alertify.error(error.response.data.message);
                });
            },
            submit() {
                this.form.post(UserController.store().url, {
                    preserveScroll: true,
                });
            }
        },
    }
</script>
