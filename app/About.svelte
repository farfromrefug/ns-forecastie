<script lang="ts">
    import * as EInfo from '@nativescript-community/extendedinfo';
    import { openUrl } from '@nativescript/core/utils/utils';
    import { showBottomSheet } from '~/bottomsheet';
    import { l, lc } from '~/helpers/locale';
    import { share } from '~/utils/share';
    import { openLink } from '~/utils/ui';
    import CActionBar from './CActionBar.svelte';
    import SettingLabelIcon from './SettingLabelIcon.svelte';
    import ThirdPartySoftwareBottomSheet from './ThirdPartySoftwareBottomSheet.svelte';

    const appVersion = EInfo.getVersionNameSync() + '.' + EInfo.getBuildNumberSync();

    function onTap(command) {
        switch (command) {
            case 'github':
                openLink(GIT_URL);
                break;
            case 'share':
                share({
                    message: STORE_LINK
                });
                break;
            case 'review':
                openUrl(STORE_REVIEW_LINK);
                break;
            case 'third_party':
                showBottomSheet({
                    parent: this,
                    view: ThirdPartySoftwareBottomSheet,
                    ignoreTopSafeArea: true,
                    trackingScrollView: 'trackingScrollView'
                });
                break;
        }
    }
</script>

<frame backgroundColor="transparent">
    <page actionBarHidden={true}>
        <gridlayout rows="auto,*">
            <CActionBar canGoBack modalWindow title={lc('about')} />
            <scrollView row="1">
                <stackLayout>
                    <SettingLabelIcon title={lc('version')} subtitle={appVersion} />
                    <SettingLabelIcon title={lc('source_code')} subtitle="obtenir le code source de l'application sur Github" icon="mdi-chevron-right" on:tap={() => onTap('github')} />
                    <SettingLabelIcon title={lc('third_parties')} subtitle="les logiciels que nous aimons et utilisons" icon="mdi-chevron-right" on:tap={() => onTap('third_party')} />
                    <SettingLabelIcon title={lc('share_application')} icon="mdi-chevron-right" on:tap={() => onTap('share')} />
                    <SettingLabelIcon title={lc('review_application')} icon="mdi-chevron-right" on:tap={() => onTap('review')} />
                </stackLayout>
            </scrollView>
        </gridlayout>
    </page>
</frame>
