<?php

namespace App\Http\Controllers;

use App\Models\Attachment;
use App\Http\Requests\StoreAttachmentRequest;
use App\Http\Requests\UpdateAttachmentRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AttachmentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAttachmentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAttachmentRequest $request)
    {
        $file = request()->file('file');
        $path = $file->store('attachments');

        return Attachment::create([
            'path' => $path,
            'file_name' => $file->getClientOriginalName(),
            'is_image' => in_array(Str::lower($file->getClientOriginalExtension()), ['jpg', 'jpeg', 'png', 'gif', 'webp']),
            'attachable_id' => $request->attachable_id,
            'attachable_type' => $request->attachable_type,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Attachment  $attachment
     * @return \Illuminate\Http\Response
     */
    public function show(Attachment $attachment)
    {
        return Storage::download($attachment->path, $attachment->file_name);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Attachment  $attachment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Attachment $attachment)
    {
        Storage::delete($attachment->path);
        $attachment->delete();

        return response(null, 204);
    }
}
