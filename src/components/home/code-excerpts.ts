/** Excerpts of Taneship Free, copied as they ship. */

export const registerUserAction = `<?php

declare(strict_types=1);

namespace App\\Actions;

use App\\Data\\RegistrationData;
use App\\Models\\User;
use Illuminate\\Auth\\Events\\Registered;

final readonly class RegisterUser
{
    public function handle(RegistrationData $registration): User
    {
        $user = User::query()->create([
            'name' => $registration->name,
            'email' => $registration->email,
            'password' => $registration->password,
        ]);

        event(new Registered($user));

        return $user;
    }
}`;

export const actionsArchitectureTest = `<?php

declare(strict_types=1);

arch('actions are final and readonly, with handle as their only public method')
    ->expect('App\\Actions')
    ->classes()
    ->toBeFinal()
    ->toBeReadonly()
    ->toHaveMethod('handle')
    ->not->toHavePublicMethodsBesides(['__construct', 'handle']);`;
