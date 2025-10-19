import React, { useState } from 'react';
import { PdfSecurityCheckerIcon } from '../components/icons/PdfSecurityCheckerIcon';
import * as pdfjsLib from 'pdfjs-dist';

interface SecurityInfo {
    isEncrypted: boolean;
    permissions: string[];
}

const PdfSecurityCheckerPage: React.FC = () => {
    const [securityInfo, setSecurityInfo] = useState<SecurityInfo | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || file.type !== 'application/pdf') return;

        setIsLoading(true);
        setSecurityInfo(null);
        setError('');
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer, password: '' }).promise;
            
            const meta = await pdf.getMetadata();
            const perms = await pdf.getPermissions();

            const permissionMap = {
                [pdfjsLib.PermissionFlag.PRINT]: 'Printing',
                [pdfjsLib.PermissionFlag.MODIFY_CONTENTS]: 'Modifying Contents',
                [pdfjsLib.PermissionFlag.COPY]: 'Copying Text/Graphics',
                [pdfjsLib.PermissionFlag.MODIFY_ANNOTATIONS]: 'Adding/Modifying Annotations',
            };
            
            const grantedPermissions = perms ? Object.entries(permissionMap)
                .filter(([flag]) => perms.includes(Number(flag)))
                .map(([, desc]) => desc) : ['All permissions granted (no restrictions found)'];

            setSecurityInfo({
                // FIX: Cast meta.info to any to access IsEncrypted property without a TypeScript error.
                isEncrypted: (meta.info as any).IsEncrypted || false,
                permissions: grantedPermissions
            });

        } catch (err: any) {
            if (err.name === 'PasswordException') {
                setError('This PDF is password-protected and cannot be opened without a password.');
            } else {
                setError('Failed to analyze PDF security.');
            }
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <PdfSecurityCheckerIcon className="w-10 h-10 text-green-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Security Checker</h1>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-md border max-w-2xl mx-auto space-y-4">
                 <input type="file" accept="application/pdf" onChange={handleFileChange} disabled={isLoading} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                {isLoading && <p className="text-center">Analyzing...</p>}
                {error && <p className="text-red-500 text-center">{error}</p>}
                {securityInfo && (
                    <div>
                        <h3 className="font-bold text-lg">Security Summary:</h3>
                        <p>Encrypted: <span className={securityInfo.isEncrypted ? 'font-bold text-red-600' : 'font-bold text-green-600'}>{securityInfo.isEncrypted ? 'Yes' : 'No'}</span></p>
                        <h4 className="font-bold mt-2">Permissions:</h4>
                        <ul className="list-disc list-inside">
                            {securityInfo.permissions.length > 0 ? securityInfo.permissions.map((p, i) => <li key={i}>{p}</li>) : <li>No specific permissions found.</li>}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PdfSecurityCheckerPage;
