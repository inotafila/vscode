/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

export interface IPath {
	filePath: string;
	lineNumber?: number;
	columnNumber?: number;
}

export interface IOpenFileRequest {
	filesToOpen?: IPath[];
	filesToCreate?: IPath[];
	filesToDiff?: IPath[];
	untitledToRestore?: IPath[];
}

export interface IWindowConfiguration {
	window: {
		openFilesInNewWindow: boolean;
		reopenFolders: string;
		restoreFullscreen: boolean;
		fullScreenZenMode: boolean;
		zoomLevel: number;
		titleBarStyle: 'native' | 'custom';
	};
}

export interface IStartupFingerprint {
	ellapsed: number;
	timers: {
		ellapsedMain?: number;
		windowLoad?: number;
		ellapsedExtensions: number;
		extensionsReady: number;
		ellapsedRequire: number;
		ellapsedViewletRestore: number;
		ellapsedEditorRestore: number;
		ellapsedWorkbench: number;
	};
	totalmem: number;
	cpus: { count: number; speed: number; model: string; };
	initialStartup: boolean;
	hasAccessibilitySupport: boolean;
	emptyWorkbench: boolean;
}