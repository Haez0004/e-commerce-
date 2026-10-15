import { useState } from 'react';
import toast from 'react-hot-toast';
import type { Profile } from '../types';
import { getProfile, saveProfile, clearProfile } from '../utils/profile';

const EMPTY: Profile = { name: '', phone: '', address: '' };

export default function Account() {
  const [saved, setSaved] = useState(getProfile);
  const [form, setForm] = useState<Profile>(saved ?? EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors: Record<string, string> = {};
    if (form.name.trim().length < 2) newErrors.name = 'Enter your full name';
    if (!/^0\d{10}$/.test(form.phone)) newErrors.phone = 'Enter a valid 11-digit phone number';
    if (form.address.trim().length < 5) newErrors.address = 'Enter your delivery address';
    return newErrors;
  }

  function handleSave() {
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    saveProfile(form);
    setSaved(form);
    toast.success('Profile saved');
  }

  function handleSignOut() {
    if (window.confirm('Remove your saved details from this phone?')) {
      clearProfile();
      setSaved(null);
      setForm(EMPTY);
      toast('Signed out');
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">My account</h1>
      <p className="mt-1 text-gray-600">
        {saved ? `Hi, ${saved.name}` : 'Save your details to check out faster.'}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        <input
          className="rounded border p-2"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        <input
          className="rounded border p-2"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        <input
          className="rounded border p-2"
          name="address"
          placeholder="Delivery address"
          value={form.address}
          onChange={handleChange}
        />
        {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}

        <button className="rounded bg-green-600 py-2 text-white" onClick={handleSave}>
          Save details
        </button>
        {saved && (
          <button
            className="rounded border border-red-500 py-2 text-red-600"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        )}
      </div>
    </div>
  );
}
