"use client";

import { Tabs } from "nextra-theme-docs";
import React, { useState } from "react";
import ReactHighlightSyntax, { Language, Theme } from "react-highlight-syntax";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSlideshow } from "react-icons/md";

import supportedLanguages from '@/data/supportedLanguages.json';
import supportedTheme from '@/data/supportedThemes.json';

type DemoProps = {
    language: string,
    theme: Theme,
    copy: boolean;
    copybuttontheme: "Dark" | "Light"
}

export default function Demo() {
    const [showBar, setShowBar] = useState<boolean>(false);
    const [configure, setConfigure] = useState<DemoProps>({ language: supportedLanguages[0].name, theme: supportedTheme[0].name as Theme, copy: false, copybuttontheme: "Dark" })

    const handleChange = (key: keyof DemoProps, value: any) => {
        setConfigure(prevConfigure => ({
            ...prevConfigure,
            [key]: value
        }));
    };

    const refactorLanguage = (language: string) : string => {
        return language.replace(/[.:\-\/]/g, '').split(' ').map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(' ');
    }

    return (
        <section className="w-full h-[90dvh] sm:h-[80dvh] flex gap-0 sm:gap-6">
            <section
                className={`w-[100%] sm:w-[25%] h-full ${showBar ? "flex" : "hidden"} sm:flex flex-col pt-6 gap-6`}
            >
                <section className="w-full flex flex-col gap-1">
                    <h1 className="text-2xl sm:text-3xl font-bold">Demo</h1>
                    <p className="text-sm sm:text-base">Explore and find the theme you want for the language of your choice.</p>
                </section>
                <section className="w-full flex flex-col gap-3">
                    <Select 
                        label="Language"
                        options={supportedLanguages.map((val) => val.name)}
                        handleChange={handleChange}
                    />
                    <Select 
                        label="Theme"
                        options={supportedTheme.map((val) => val.name)}
                        handleChange={handleChange}
                    />
                    <RadioSelect
                        option={[
                            {value: "Enable copy button", message: "This allows you to add a copy button to your code"},
                            {value: "Disable copy button", message: "Remove the copy button when you don't want it."}
                        ]}
                        handleChange={handleChange}
                        selected={configure.copy}
                    />
                    <Select 
                        label="Copy button theme"
                        options={["Dark", "Light"]}
                        handleChange={handleChange}
                    />
                </section>
                <button
                    className={`inline-flex sm:hidden items-center gap-1 px-3 py-2 rounded text-white bg-red-600 cursor-pointer`}
                    onClick={() => setShowBar(false)}
                >
                    <MdSlideshow className="text-base sm:text-lg" />
                    <span className="text-sm sm:text-base">View live</span>
                </button>
            </section>
            <section
                className={`w-[100%] sm:w-[75%] h-full overflow-y-scroll ${!showBar ? "flex" : "hidden"} sm:flex flex-col pt-4 sm:pt-0`}
            >
                <button
                    className={`inline-flex sm:hidden items-center gap-1 cursor-pointer`}
                    onClick={() => setShowBar(true)}
                >
                    <IoSettingsOutline className="text-base sm:text-lg" />
                    <span className="text-sm sm:text-base">Open settings</span>
                </button>
                <section className="h-full w-full">
                    <Tabs items={["Live", "Code"]}>
                        <Tabs.Tab>
                            <section className="h-full w-full">
                                <ReactHighlightSyntax
                                    language={refactorLanguage(configure.language) as Language}
                                    copy={configure.copy}
                                    copyBtnTheme={configure.copybuttontheme}
                                    theme={configure.theme}
                                >
                                    {supportedLanguages.find((lan) => lan.name === configure.language)?.code ?? ""}
                                </ReactHighlightSyntax>
                            </section>
                        </Tabs.Tab>
                        <Tabs.Tab>
                            <section>
                                <CodePresentation 
                                    code={supportedLanguages.find((lan) => lan.name === configure.language)?.code ?? ""}
                                    copy={configure.copy}
                                    copyBtnTheme={configure.copybuttontheme}
                                    lan={refactorLanguage(configure.language) as Language}
                                    theme={configure.theme}
                                />
                            </section>
                        </Tabs.Tab>
                    </Tabs>
                </section>
            </section>
        </section>
    )
}

function Select({options, label, handleChange} : {
    options: string[],
    label: string,
    handleChange: (key: keyof DemoProps, value: any) => void
}) {
    function removeSpaces(text: string): string {
        return text.replace(/\s+/g, '').toLowerCase();
    }

    return (
        <div>
            <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2">{label}</label>
            <select 
                id="hs-select-label" 
                className="py-2 px-1 pe-9 block w-full rounded text-sm disabled:opacity-50 disabled:pointer-events-none"
                onChange={(e) => handleChange(removeSpaces(label) as keyof DemoProps, e.target.value)}
            >
                {
                    options.map((opt, index) => {
                        return (
                            <option key={index}>{opt}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

function RadioSelect({option, selected, handleChange} : {
    option: {value: string; message: string}[],
    handleChange: (key: keyof DemoProps, value: any) => void,
    selected: boolean
}) {
    return (
        <div className="grid space-y-3">
            <div className="relative flex items-start">
                <div className="flex items-center h-5 mt-1">
                    <input id="select" name="select-with-description" type="radio" className="rounded-full" 
                        aria-describedby="select-description" 
                        checked={(selected)}
                        onChange={(e) => {
                            if (e.target.value === "on") {
                                handleChange("copy", true)
                            }
                        }}
                    />
                </div>
                <label htmlFor="select" className="ms-3">
                    <span className="block text-sm font-semibold">{option[0].value}</span>
                    <span id="select-description" className="block text-sm text">{option[0].message}</span>
                </label>
            </div>
            <div className="relative flex items-start">
                <div className="flex items-center h-5 mt-1">
                    <input id="select" name="select-with-description" type="radio" className="rounded-full" 
                        aria-describedby="select-description" 
                        checked={(!selected)}
                        onChange={(e) => {
                            if (e.target.value === "on") {
                                handleChange("copy", false)
                            }
                        }}
                    />
                </div>
                <label htmlFor="select" className="ms-3">
                    <span className="block text-sm font-semibold">{option[1].value}</span>
                    <span id="select-description" className="block text-sm text">{option[1].message}</span>
                </label>
            </div>
        </div>
    )
}

function CodePresentation({code, lan, theme, copy, copyBtnTheme} : {
    code: string;
    lan: Language;
    theme: Theme;
    copy: boolean;
    copyBtnTheme: "Light" | "Dark"
}) {
    return (
        <ReactHighlightSyntax
            language={lan}
            copy={copy}
            copyBtnTheme={copyBtnTheme}
            theme={theme}
        >
            {`import React from 'react';
import ReactHighlightSyntax from 'react-highlight-syntax';

const code = \`${code}\`;

const App = () => (
    return (
        <ReactHighlightSyntax 
            language={'${lan}'}
            theme={'${theme}'}
            ${
                copy
                ? `copy={${copy}}
            copyBtnTheme={'${copyBtnTheme}'}`
                : ''
            }
        >
            {code}
        </ReactHighlightSyntax>
    );
);

export default App;`}
        </ReactHighlightSyntax>
    )
}

// const DisplayTabs = ({TabContentA, TabContentB} : {
//     TabContentA: React.ReactNode;
//     TabContentB: React.ReactNode
// }) => {
//     const [selectedTab, setSelectedTab] = useState<"Live" | "Code">("Live")

//     return (
//         <section className="w-full h-full flex flex-col gap-4">
//             <section className="w-full flex items-center gap-2 border-b-[1px] border-neutral-600">
//                 {["Live", "Code"].map((tab, index) => {
//                     const newTab = tab as "Live" | "Code";

//                     return (
//                         <div 
//                             key={index}
//                             onClick={() => setSelectedTab(newTab)}
//                             className={`cursor-pointer px-1 pb-1 border-b-2 ${(newTab === selectedTab) ? "border-red-600 text-red-600" : "border-transparent"}`}
//                         >
//                             <span className={`text-sm sm:text-base font-semibold`}>{tab}</span>
//                         </div>
//                     )
//                 })}
//             </section>
//             <section className="w-full h-full overflow-y-scroll">
//                 {(selectedTab === "Live") ? TabContentA : TabContentB}
//             </section>
//         </section>
//     )
// }