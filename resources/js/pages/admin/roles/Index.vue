<template>
    <Head title="Lomu administrēšana" />

    <div class="row justify-content-center">
        <div class="md:col-4">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Sistēmas lomas</h4>
                </div>
                <table class="table m-0">
                    <!-- <thead>
                        <tr>
                            <th>Lomas</th>
                        </tr>
                    </thead> -->
                    <tbody>
                        <tr v-for="role in roles">
                            <td>
                                <Link :href="RoleController.show(role).url">
                                    {{ role.name }}
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="card-footer justify-content-end">
                    <button class="btn btn-primary" @click="$refs.roleModal.show()">Pievienot</button>
                </div>
            </div>
        </div>
        <modal
            title="Pievienot jaunu lomu"
            ref="roleModal"
        >
            <text-input-group
                label="Nosaukums"
                name="name"
                v-model="form.name"
                :errors="form.errors.name"
            />
            <template #footer>
                <button
                    class="btn btn-success"
                    @click="form.post(RoleController.store().url, {
                        onSuccess: () => {
                            $refs.roleModal.hide();
                            form.reset();
                        },
                    })"
                    :class="{ disabled: form.processing }"
                >
                    Saglabāt
                </button>
            </template>
        </modal>
    </div>
</template>

<script>
    import AuthenticatedLayout from '@scaffold/layouts/AuthenticatedLayout.vue';
    import { Head, useForm, Link } from '@inertiajs/vue3';
    import TextInputGroup from '@scaffold/components/TextInputGroup.vue';
    import Modal from '@scaffold/components/Modal.vue';
    import RoleController from '@/actions/App/Http/Controllers/Admin/RoleController';

    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Link,
            TextInputGroup,
            Modal,
        },
        layout: { pageTitle: 'Lomu administrēšana' },
        props: {
            roles: Array,
        },
        data() {
            return {
                form: useForm({
                    name: '',
                }),
                RoleController,
            }
        },
    }
</script>

<style>
    form {
        width: 100%;
    }
</style>
