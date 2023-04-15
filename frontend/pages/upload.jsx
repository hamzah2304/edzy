import { useState } from 'react';
import Bundlr from '../client/bundlr';
import fileReaderStream from 'filereader-stream';
import { Player } from '@livepeer/react';
 
export default function Home() {
  const [video, setVideo] = useState(null);
  const [arweaveId, setArweaveId] = useState(null);
 
  const uploadVideo = async () => {
    const bundlr = await Bundlr();
    const stream = fileReaderStream(video);
    const { data } = await bundlr.uploader.chunkedUploader.uploadData(stream, {
      tags: [{ name: 'Content-Type', value: 'video/mp4' }],
    });
    setArweaveId(`ar://${data.id}`);
  };
 
  return (
    <div className="flex flex-col justify-center items-center h-screen font-poppins">
      <h1 className="text-5xl font-bold text-slate-900 text-transparent bg-clip-text bg-gradient-to-r from-[#F63E02] to-[#FCE762]">
        Livepeer class upload
      </h1>
      <h3 className="text-2xl mt-6 text-slate-800 w-[50%] text-center">
        Here you can upload your video streams and in the future initiate new ones. 
      </h3>
      <div className="flex flex-col items-center mt-6">
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
        />
        <button
          onClick={uploadVideo}
          className="bg-gradient-to-r from-from-[#F63E02] to-[#FCE762]  text-white  rounded-md mt-6 px-6 py-2 "
        >
          Upload Video
        </button>
      </div>
      {arweaveId && (
        <div className="mt-6 w-1/2">
          <Player
            src={arweaveId}
            controls
            autoPlay
            muted
            autoUrlUpload={{
              fallback: true,
            }}
          />
        </div>
      )}
    </div>
  );
}

