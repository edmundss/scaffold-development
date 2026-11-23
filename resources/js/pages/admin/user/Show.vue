<script>
import { Head, Link, router } from '@inertiajs/vue3';
import axios from 'axios';
import Card from '@scaffold/components/Card.vue';
import DeleteAccount from '@scaffold/components/DeleteAccount.vue';
import Checkbox from '@scaffold/components/Checkbox.vue';
import {
    toggleRole,
    update,
} from '@/actions/App/Http/Controllers/Admin/UserController';

export default {
    components: { Card, Checkbox, Head, Link, DeleteAccount },
    layout: { pageTitle: 'Lietotāja kartiņa' },
    props: {
        user: { type: Object, required: true },
        userRoles: { type: [Object, Array], required: true },
    },
    data() {
        return {
            roleStates: { ...this.userRoles },
            pendingRoles: new Set(),
            updating: false,
            isProduction: import.meta.env.PROD,
        };
    },
    computed: {
        profileDetails() {
            return [this.user.department, this.user.title]
                .filter(Boolean)
                .join(', ');
        },
    },
    watch: {
        userRoles(roles) {
            this.roleStates = { ...roles };
        },
    },
    methods: {
        async saveRole(role, checked) {
            this.pendingRoles.add(role);
            const previousValue = this.roleStates[role];
            this.roleStates[role] = checked;

            try {
                const { data } = await axios.post(
                    toggleRole.url(this.user.id),
                    { add: checked, role },
                );
                const { default: alertify } = await import('alertifyjs');
                alertify.success(data.message);
            } catch (error) {
                this.roleStates[role] = previousValue;
                const { default: alertify } = await import('alertifyjs');
                alertify.error(
                    error.response?.data?.message ||
                        'Lomu neizdevās atjaunināt',
                );
            } finally {
                this.pendingRoles.delete(role);
            }
        },
        async updateUser() {
            this.updating = true;

            try {
                const { data } = await axios.put(update.url(this.user.id), {
                    username: this.user.username,
                });
                const { default: alertify } = await import('alertifyjs');
                alertify.success(data.message);
                router.reload({ only: ['user', 'userRoles'] });
            } catch (error) {
                const { default: alertify } = await import('alertifyjs');
                alertify.error(
                    error.response?.data?.message ||
                        'Lietotāja datu atjaunošana neizdevās',
                );
            } finally {
                this.updating = false;
            }
        },
    },
};
</script>

<template>
    <div>
        <Head title="Lietotāja kartiņa" />

        <div class="row justify-content-center">
            <div class="col-12 md:col-6 xl:col-4">
                <div class="card card-profile">
                    <div
                        v-if="user.avatar_url || user.avatar"
                        class="card-avatar"
                    >
                        <img
                            :src="user.avatar_url || user.avatar"
                            :alt="user.name"
                        />
                    </div>

                    <div class="card-body">
                        <div class="d-flex justify-content-end gap-2">
                            <button
                                type="button"
                                class="btn-icon"
                                aria-label="Atjaunot datus no AD"
                                :disabled="updating || pendingRoles.size > 0"
                                @click="updateUser"
                            >
                                <i
                                    class="material-icons"
                                    :class="{ spin: updating }"
                                    aria-hidden="true"
                                    >refresh</i
                                >
                            </button>
                            <Link
                                v-if="!isProduction"
                                :href="`/dev-login?user_id=${user.id}`"
                                class="btn-icon"
                                aria-label="Pārslēgties uz lietotāju"
                            >
                                <i class="material-icons" aria-hidden="true"
                                    >theater_comedy</i
                                >
                            </Link>
                        </div>

                        <p v-if="profileDetails" class="card-category">
                            {{ profileDetails }}
                        </p>
                        <h1 class="card-title h4">{{ user.name }}</h1>
                        <p class="card-description">
                            <a :href="`mailto:${user.email}`">{{
                                user.email
                            }}</a>
                        </p>
                    </div>
                </div>

                <Card title="Lomas">
                    <Checkbox
                        v-for="(checked, role) in roleStates"
                        :key="role"
                        :checked="checked"
                        :disabled="updating || pendingRoles.has(role)"
                        @update:checked="saveRole(role, $event)"
                    >
                        {{ role }}
                    </Checkbox>
                </Card>
                <DeleteAccount :user="user" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
