import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import styles from './CookieConsent.module.css';

const STORAGE_KEY = 'wiviy_cookie_consent';

const DEFAULT_PREFERENCES = {
  strictlyNecessary: true,
  analytics: false,
  preferences: false,
  marketing: false,
};

export default function CookieConsent({ brandName = 'Wiviy' }) {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences((prev) => ({ ...prev, ...parsed }));
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  // Listen for global custom events to open settings or banner from anywhere (e.g. footer)
  useEffect(() => {
    const handleOpenSettings = () => {
      setShowModal(true);
    };

    const handleOpenBanner = () => {
      setShowBanner(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    window.addEventListener('open-cookie-banner', handleOpenBanner);

    window.openCookieSettings = handleOpenSettings;
    window.openCookieBanner = handleOpenBanner;
    window.resetCookieConsent = () => {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      setShowBanner(true);
    };

    return () => {
      window.removeEventListener('open-cookie-settings', handleOpenSettings);
      window.removeEventListener('open-cookie-banner', handleOpenBanner);
    };
  }, []);

  const saveToStorage = (prefs) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {
      console.error('Error saving cookie preferences:', e);
    }
  };

  // 1. "Accept all" from banner
  const handleAcceptAll = () => {
    const allEnabled = {
      strictlyNecessary: true,
      analytics: true,
      preferences: true,
      marketing: true,
      consentedAt: new Date().toISOString(),
    };
    setPreferences(allEnabled);
    saveToStorage(allEnabled);
    setShowBanner(false);
    setShowModal(false);
  };

  // 2. "Reject non-essential" from banner or modal
  const handleRejectNonEssential = () => {
    const essentialOnly = {
      strictlyNecessary: true,
      analytics: false,
      preferences: false,
      marketing: false,
      consentedAt: new Date().toISOString(),
    };
    setPreferences(essentialOnly);
    saveToStorage(essentialOnly);
    setShowBanner(false);
    setShowModal(false);
  };

  // 3. "Manage cookies" from banner
  const handleManageCookies = () => {
    setShowModal(true);
  };

  // 4. "Save preferences" from modal
  const handleSavePreferences = () => {
    const updated = {
      ...preferences,
      strictlyNecessary: true,
      consentedAt: new Date().toISOString(),
    };
    saveToStorage(updated);
    setShowBanner(false);
    setShowModal(false);
  };

  // Toggle category
  const toggleCategory = (key) => {
    if (key === 'strictlyNecessary') return; // Essential is always active
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!mounted) return null;

  return (
    <>
      {/* 1. Floating Cookie Banner (Bottom Right) */}
      {showBanner && !showModal && (
        <aside
          className={styles.banner}
          aria-label="Cookie consent banner"
          role="region"
        >
          <div className={styles.eyebrow}>COOKIE</div>

          <h2 className={styles.bannerTitle}>We use cookies</h2>

          <p className={styles.bannerText}>
            We use cookies to keep {brandName} running smoothly, understand how people use our site, and improve your experience. You can choose which cookies you allow.
          </p>

          <Link to="/cookie-policy" className={styles.policyLink}>
            Cookie Policy
          </Link>

          <div className={styles.bannerActions}>
            <button
              type="button"
              id="cookie-banner-accept-all"
              className={styles.btnLime}
              onClick={handleAcceptAll}
            >
              Accept all
            </button>

            <button
              type="button"
              id="cookie-banner-reject-btn"
              className={styles.btnOutline}
              onClick={handleRejectNonEssential}
            >
              Reject non-essential
            </button>
          </div>

          <div className={styles.manageCookiesWrapper}>
            <button
              type="button"
              id="cookie-banner-manage-btn"
              className={styles.btnManageCookies}
              onClick={handleManageCookies}
            >
              Manage cookies
            </button>
          </div>
        </aside>
      )}

      {/* 2. Cookie Settings Modal */}
      {showModal && (
        <div
          className={styles.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div id="cookie-settings-modal" className={styles.modal}>
            <div className={styles.modalContent}>
              {/* Header */}
              <div className={styles.modalHeader}>
                <h2 id="cookie-settings-title" className={styles.modalTitle}>
                  Cookie settings
                </h2>
                <button
                  type="button"
                  id="cookie-modal-close-btn"
                  className={styles.closeBtn}
                  onClick={() => setShowModal(false)}
                  aria-label="Close cookie settings"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Subtitle */}
              <p className={styles.modalSubtitle}>
                Choose which types of cookies you’d like to allow. Essential cookies are always active because they’re required for the website to work.
              </p>

              {/* 4 Items */}
              <div className={styles.categoryList}>
                {/* 01 — Strictly necessary */}
                <div className={styles.categoryRow}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryTitleGroup}>
                      <h3 className={styles.categoryTitle}>01 — Strictly necessary</h3>
                      <span className={styles.alwaysActiveBadge}>Always active</span>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={true}
                      disabled
                      aria-label="Strictly necessary cookies always active"
                      className={`${styles.switchButton} ${styles.switchButtonActive} ${styles.switchButtonDisabled}`}
                    >
                      <span
                        className={`${styles.switchThumb} ${styles.switchThumbActive}`}
                      />
                    </button>
                  </div>
                  <p className={styles.categoryDesc}>
                    These cookies are required for the website to function properly. They help with security, basic functionality, and remembering your privacy choices.
                  </p>
                </div>

                {/* 02 — Analytics */}
                <div className={styles.categoryRow}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryTitleGroup}>
                      <h3 className={styles.categoryTitle}>02 — Analytics</h3>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.analytics}
                      onClick={() => toggleCategory('analytics')}
                      aria-label="Toggle Analytics cookies"
                      className={`${styles.switchButton} ${
                        preferences.analytics ? styles.switchButtonActive : ''
                      }`}
                    >
                      <span
                        className={`${styles.switchThumb} ${
                          preferences.analytics ? styles.switchThumbActive : ''
                        }`}
                      />
                    </button>
                  </div>
                  <p className={styles.categoryDesc}>
                    These cookies help us understand how visitors use {brandName} so we can improve the website and experience.
                  </p>
                </div>

                {/* 03 — Preferences */}
                <div className={styles.categoryRow}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryTitleGroup}>
                      <h3 className={styles.categoryTitle}>03 — Preferences</h3>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.preferences}
                      onClick={() => toggleCategory('preferences')}
                      aria-label="Toggle Preferences cookies"
                      className={`${styles.switchButton} ${
                        preferences.preferences ? styles.switchButtonActive : ''
                      }`}
                    >
                      <span
                        className={`${styles.switchThumb} ${
                          preferences.preferences ? styles.switchThumbActive : ''
                        }`}
                      />
                    </button>
                  </div>
                  <p className={styles.categoryDesc}>
                    These cookies remember choices and preferences so we can provide a more personalized experience.
                  </p>
                </div>

                {/* 04 — Marketing */}
                <div className={styles.categoryRow}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryTitleGroup}>
                      <h3 className={styles.categoryTitle}>04 — Marketing</h3>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences.marketing}
                      onClick={() => toggleCategory('marketing')}
                      aria-label="Toggle Marketing cookies"
                      className={`${styles.switchButton} ${
                        preferences.marketing ? styles.switchButtonActive : ''
                      }`}
                    >
                      <span
                        className={`${styles.switchThumb} ${
                          preferences.marketing ? styles.switchThumbActive : ''
                        }`}
                      />
                    </button>
                  </div>
                  <p className={styles.categoryDesc}>
                    These cookies may be used to understand campaigns and deliver more relevant content and advertising.
                  </p>
                </div>
              </div>

              {/* Policy Link */}
              <Link
                to="/cookie-policy"
                className={styles.modalPolicyLink}
                onClick={() => setShowModal(false)}
              >
                Read our Cookie Policy
              </Link>

              {/* Modal Actions */}
              <div className={styles.modalActions}>
                <button
                  type="button"
                  id="cookie-modal-reject-btn"
                  className={styles.btnModalReject}
                  onClick={handleRejectNonEssential}
                >
                  Reject non-essential
                </button>

                <button
                  type="button"
                  id="cookie-modal-save-btn"
                  className={styles.btnModalSave}
                  onClick={handleSavePreferences}
                >
                  Save preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
