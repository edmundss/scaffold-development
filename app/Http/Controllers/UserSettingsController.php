<?php

namespace App\Http\Controllers;

class UserSettingsController extends \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController
{
    public function updateComponents()
    {
        $components = request('components');

        $toSync = [];

        foreach ($components as $index => $component) {
            $toSync[$component['id']] = ['order' => $index];
        }

        auth()->user()->components()->sync($toSync);

        return redirect()->route('user-settings.index');
    }
}
