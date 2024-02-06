import React from "react";

const TagComponent = ({ TagTitle, TagList, setData, setscroll }) => {
	const tagClicked = async (tag) => {
		const response = await fetch(
			`http://localhost:5000/api/models?tag=${tag}`
		);
		setData(await response.json());
		setscroll(false);
	};

	return (
		<div className="flex flex-col p-1 font-[Outfit,sans-serif] pb-4 border-b border-gray-400">
			<p className="font-bold text-xl pl-1">{TagTitle}</p>
			<div className="flex flex-wrap p-1">
				<div className="rounded-lg border hover:bg-black hover:cursor-pointer hover:border-2 p-1 m-1 border-[#818a9c] flex flex-row items-center group">
					<svg
						className="pr-1 "
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						fill="#f26822"
						focusable="false"
						role="img"
						width="1.5em"
						height="1.5em"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 32 32"
					>
						<path d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2v4H5V5zm-10 6h10v7H17zm-2 7H5v-7h10zM5 20h10v7H5zm12 7v-7h10v7z"></path>
					</svg>
					<span
						onClick={() => {
							tagClicked(TagList[0]);
						}}
						className=" group-hover:text-white "
					>
						{TagList[0]}
					</span>
				</div>
				<div className="rounded-lg border hover:bg-black hover:cursor-pointer hover:border-2 p-1 m-1 border-[#818a9c] flex flex-row items-center group">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						fill="#facf86"
						focusable="false"
						role="img"
						width="1.5em"
						height="1.5em"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 32 32"
					>
						<path
							d="M29.537 13.76l-3.297-3.297a1.586 1.586 0 0 0-2.24 0L10 24.467V30h5.533l14.004-14a1.586 1.586 0 0 0 0-2.24zM14.704 28H12v-2.704l9.44-9.441l2.705 2.704zM25.56 17.145l-2.704-2.704l2.267-2.267l2.704 2.704z"
							fill="#62d1ac"
						></path>
						<path
							d="M11 17h2v-7h3V8H8v2h3v7z"
							fill="#62d1ac"
						></path>
						<path
							d="M8 20H4V4h16v4h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4z"
							fill="#62d1ac"
						></path>
					</svg>
					<span
						onClick={() => {
							tagClicked(TagList[1]);
						}}
						className=" group-hover:text-white"
					>
						{TagList[1]}
					</span>
				</div>
				<div className="rounded-lg border hover:bg-black hover:cursor-pointer hover:border-2 p-1 m-1 border-[#818a9c] flex flex-row items-center group">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="img"
						width="1.5em"
						height="1.5em"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 32 32"
					>
						<path
							d="M29.707 19.293l-3-3a1 1 0 0 0-1.414 0L16 25.586V30h4.414l9.293-9.293a1 1 0 0 0 0-1.414zM19.586 28H18v-1.586l5-5L24.586 23zM26 21.586L24.414 20L26 18.414L27.586 20z"
							fill="#8a8df5"
						></path>
						<path
							d="M20 13v-2h-2.142a3.94 3.94 0 0 0-.425-1.019l1.517-1.517l-1.414-1.414l-1.517 1.517A3.944 3.944 0 0 0 15 8.142V6h-2v2.142a3.944 3.944 0 0 0-1.019.425L10.464 7.05L9.05 8.464l1.517 1.517A3.94 3.94 0 0 0 10.142 11H8v2h2.142a3.94 3.94 0 0 0 .425 1.019L9.05 15.536l1.414 1.414l1.517-1.517a3.944 3.944 0 0 0 1.019.425V18h2v-2.142a3.944 3.944 0 0 0 1.019-.425l1.517 1.517l1.414-1.414l-1.517-1.517A3.94 3.94 0 0 0 17.858 13zm-6 1a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2z"
							fill="#8a8df5"
						></path>
						<path
							d="M12 30H6a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h16a2.002 2.002 0 0 1 2 2v10h-2V4H6v24h6z"
							fill="#8a8df5"
						></path>
					</svg>
					<span
						onClick={() => {
							tagClicked(TagList[2]);
						}}
						className=" group-hover:text-white"
					>
						{TagList[2]}
					</span>
				</div>
				<div className="rounded-lg border hover:bg-black hover:cursor-pointer hover:border-2 p-1 m-1 border-[#818a9c] flex flex-row items-center group">
					<svg
						className=""
						width="1.5em"
						height="1.5em"
						viewBox="0 0 32 32"
					>
						<path
							d="M29.474 19.12L23.681 16l5.793-3.12a1 1 0 0 0 0-1.76l-13-7a.998.998 0 0 0-.948 0l-13 7a1 1 0 0 0 0 1.76L8.319 16l-5.793 3.12a1 1 0 0 0 0 1.76l13 7a1 1 0 0 0 .948 0l13-7a1 1 0 0 0 0-1.76zM16 6.136L26.89 12L16 17.864L5.11 12zm0 19.728L5.11 20l5.319-2.864l5.097 2.744a1 1 0 0 0 .948 0l5.097-2.745L26.891 20z"
							fill="#f6a723"
						></path>
					</svg>
					<span
						onClick={() => {
							tagClicked(TagList[3]);
						}}
						className=" group-hover:text-white"
					>
						{TagList[3]}
					</span>
				</div>
			</div>
		</div>
	);
};

export default TagComponent;
